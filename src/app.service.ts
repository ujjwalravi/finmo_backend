import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1><center>Finmo Backend Assignment - SDE Intern</center></h1>\
    <hr>\
    <p>This is the homepage the most people will visit first. So, just thought of adding the \
    details of all the routes available in this API so evaluators don't have to go through\
    documentation again and again.</p>\
    <p>I wish you people a great time playing with the API and parking cars in this virtual parking lot.</p><hr>\
    <h2>List of routes avaiable:-</h2>\
    <p><b>BASE_URL = </b> <a href="https://finmo-backend-y5zi.vercel.app/">"https://finmo-backend-y5zi.vercel.app"</a></p>\
    <ul>\
    <li><b>POST /parking_lot - </b> Initialise a parking lot. Can be initialised only once.</li>\
    <li><b>PATCH /parking_lot - </b> Increment the slots of parking lot.</li>\
    <li><b>POST /park - </b> Park a car in the slot. Provide the details of car in the body.</li>\
    <li><b>GET /park/status - </b> Fetch the details of the cars parked in the parking slots.</li>\
    <li><b>GET /park/details - </b> Fetch the slots details of the cars parked.</li>\
    <li><b>GET /registration_numbers/:color - </b>Fetch the registration number of cars with particular color.</li>\
    <li><b>GET /slot_numbers/:color - </b>Fetch the parking slot numbers of cars with particular color.</li>\
    <li><b>POST /park/clear - </b>Free the parking slot either by passing registration number or slot number.</li></ul>\
    <hr>\
    <p><b>Project Github Link - </b><a href="https://github.com/ujjwalravi/finmo_backend">https://github.com/ujjwalravi/finmo_backend</a></p>\
    <p>I really hope you guys enjoy evaluating my work and like it and call me for further rounds and ultimately make me your colleague :P</p>\
    <p>Author - <b><i>Ravi Ujjwal</i></b></p>`;
  }
}
