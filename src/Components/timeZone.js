/* const timeZone = [
    {
      city: 'New York',
      zone: 'America/New_York',
    },
    {
      city: 'China',
      zone: 'Asia/Shanghai',
    },
    {
      city: 'Paris',
      zone: 'Europe/Paris',
    },
    {
      city: 'Pakistan',
      zone: 'Asia/Karachi',
    },
  ];
  
  export default timeZone;
   */

  import moment from 'moment-timezone';

const allTimeZones = moment.tz.names();
const timeZone = allTimeZones.map((zone) => ({
  city: zone,
  zone,
}));

export default timeZone;

