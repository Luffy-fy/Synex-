const { ClusterManager } = require("discord-hybrid-sharding");
const config = require('./src/config.js');

const manager = new ClusterManager("./src/synex.js", {
  totalShards: 1,
  shardsPerClusters: 1,   // ✅ IMPORTANT
  mode: "worker",
  token: config.token,
});

manager.on("clusterCreate", cluster => {
  console.log(`Launched cluster ${cluster.id}`);
});

manager.spawn();
