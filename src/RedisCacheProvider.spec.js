const RedisCacheProvider = require('./RedisCacheProvider');

describe('RedisCacheProvider', () => {
  describe('#set', () => {
    it('sets value to redis', async () => {
      const provider = new RedisCacheProvider();
      await provider.set('key1', 'value1111');
      const result = await provider.get('key1');
      expect(result).toEqual('value1111');
    });

    it('overrides latest value', async () => {
      const provider = new RedisCacheProvider();
      await provider.set('key1', 'value1111');
      await provider.set('key1', 'value2222');
      const result = await provider.get('key1');
      expect(result).toEqual('value2222');
    });
  });

  describe('#remove', () => {
    it('removes value from redis', async () => {
      const provider = new RedisCacheProvider();
      await provider.set('key1', 'value1111');
      await provider.remove('key1');
      const result = await provider.get('key1');
      expect(result).toBe(null);
    });
  });

  describe('#removeAll', () => {
    it('clears all values', async () => {
      const provider = new RedisCacheProvider();
      await provider.set('key1', 'value1111');
      await provider.set('key2', 'value1111');
      await provider.removeAll();
      const value1 = await provider.get('key1');
      const value2 = await provider.get('key2');
      expect(value1).toBe(null);
      expect(value2).toBe(null);
    });
  });
});