function updateMap()
{
   fetch("/data.json")
   .then(response=>response.json())
   .then(rsp=>{
      console.log(rsp.data)
      rsp.data.forEach(element=>{
          latitude = element.latitude;
          longitude = element.longitude;

          cases = element.infected;
          if (cases>255){
              color:"rgb(255, 0, 0)"
          } 
          else{

          }

        //   mark on the map
        new marker = new mapboxgl.Marker({
            draggable: false
            color:color
            })
            .setLngLat([longitutde, latitude ])
            .addTo(map);
             
      });
   });
}

updateMap();