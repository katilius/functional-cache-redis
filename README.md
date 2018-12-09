# Functional Cache Redis

Cache provider for [functional-cache](https://www.npmjs.com/package/functional-cache) library.

## Usage

```javascript
const cacheFactory = require('functional-cache');
const RedisProvider = require('functional-cache-redis');

const cache = cacheFactory.createNew(new RedisProvider());
const getBooks = cache.cacheCalls(getBooksFromApi);
```

## Customization

Redis cache provider uses [Redis](https://www.npmjs.com/package/redis) npm library. When creating new `CacheProvider` instance without params, it initiates new client connecting to `localhost:6379`. This can by configured simply by providing different client instance to `RedisProvider` constructor:

```javascript
const redisClientWithDifferentOptions = getRedisClient();
const cache = cacheFactory.createNew(new RedisProvider(redisClientWithDifferentOptions));
const getBooks = cache.cacheCalls(getBooksFromApi);

```
