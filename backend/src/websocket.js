const socketio = require ('socket.io')

let io

const connections = []

exports.setupWebsocket = (server) => {

      io = socketio(server)

      io.on('connection' , socket => {
         const { latitude , logitudes ,  prefdrinks} = socket.handshake.query

         connections.push({
            id: socket.id, 
            coordinates: {
               latidude : Number(latitude),
               logitude : Number(logitude)
            },

            prefdrinks : prefdrinks.split(',').map(prefdrinks => prefdrinks.trim())
         })
      })

      exports.findConnections = (coordinates, prefdrinks) => {
         return connections.filter(connections => {
            return getDistanceFromLatLonInKm(coordinates, connections.coordinates) < 10
            && connections.prefdrinks.some(item => prefdrinks.includes(item))
         })
      }

      exports.sendMessage = (to, message, data) => {
        to.forEach(connection => {
           io.to(connection.id).emit(message, data)
        })
      }

      function deg2rad(deg){
         return deg * (Math.PI/180);
      }

      function getDistanceFromLatLonInKm(
         centerCoordinates, 
         pointCoordinates
      ) {
         
         const radius = 6371

         const {latidude: lat1, logitude: lon1} = centerCoordinates;
         const {latidude: lat2, logitude: lon2} = pointCoordinates; 
         
         const dLat = deg2rad(lat2-lat1);
         const dLon = deg2rad(lon2-lon1); 
      }

      const a = 
      Math.sin(dLat/2) * Math.sin(dLat/ 2) +
      Math.cos(deg2rad(lat1)) *
         Math.cos(deg2rad(lat2)) *
         Math.sin(dLon / 2) *
         Math.sin(dLon/ 2); 
         const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 -a )); 
         const distance = radius * center; 

         return distance;

}; 