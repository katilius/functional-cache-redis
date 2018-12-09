var redis = require('redis');

module.exports = class RedisCacheProvider {
  constructor(client) {
    if (!client) {
      this.client = redis.createClient();
    } else {
      this.client = client;
    }
  }

  set(key, value) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, function(err, reply) {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, function(err, reply) {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  async remove(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, function(err, reply) {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  removeAll() {
    return new Promise((resolve, reject) => {
      this.client.flushall(function(err, reply) {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }
};
