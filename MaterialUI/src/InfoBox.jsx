
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BoltIcon from '@mui/icons-material/Bolt';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import "./InfoBox.css"


export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1545042679-41d22b2ca130?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let COLD_URL = "https://plus.unsplash.com/premium_photo-1711653116222-c88ce0285b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
  let HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
  let RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div>
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <BoltIcon></BoltIcon> : info.temp > 20 ? <LocalFireDepartmentIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography component={"span"} variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature = {info.temp} &deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temp = {info.tempMax}</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelslike}</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  )
}