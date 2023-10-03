

'use client';

import React, { useEffect } from "react";
import { Chart } from "chart.js";
import Layout from "../components/Layout";
import { FcBusinesswoman } from "react-icons/fc";
import { FcDocument  } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import Image from 'next/image';
import { BASE_URL } from "@/app/config";
async function getTotalItems(endpoint: RequestInfo | URL) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.length;
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
}
function Overview() {
  useEffect(() => {
    var stackedCanvas = document.getElementById('stackedBarChart1') as HTMLCanvasElement;
    var stackCtx = stackedCanvas.getContext('2d');
    if (stackCtx) {
      var myChart = new Chart(stackCtx, {
        type: 'bar',
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            data: [66, 116, 107, 131, 43],
            label: "Target",
            borderColor: "rgb(109, 253, 181)",
            backgroundColor: "rgb(109, 253, 181,0.5)",
            borderWidth: 2
          }, {
            data: [40, 70, 63, 30, 10],
            label: "Reality",
            borderColor: "#FFC0CB",
            backgroundColor: "#FFC0CB",
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{}],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                max: 150,
              }
            }]
          }
        }
      });
    }


var pieCanvas = document.getElementById('pieChart') as HTMLCanvasElement;
var pieCtx = pieCanvas.getContext('2d');
fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/appointments/')
  .then(response => response.json())
  .then(appointments => {
    const total = appointments.length;
    const bookedAppointments = (total / total) * 100;
    fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/courses/')
      .then(response => response.json())
      .then(courses => {
        const coursesUploaded = (courses.length / total) * 100;
        fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/articles/')
          .then(response => response.json())
          .then(articles => {
            const educationalTips = (articles.length / total) * 100;
            if (pieCtx) {
              var pieChart = new Chart(pieCtx, {
                type: 'pie',
                data: {
                  labels: ["Booked Appointments", "Courses uploaded", "Educational Tips"],
                  datasets: [{
                    data: [bookedAppointments, coursesUploaded, educationalTips],
                    borderColor: [
                      "#1082EB",
                      "#DA95F2",
                    ],
                    backgroundColor: [
                      "#1082EB",
                      "#7FFFD4",
                      "#07A685",
                    ],
                    borderWidth: 1,
                  }]
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    xAxes: [{
                      display: false,
                    }],
                    yAxes: [{
                      display: false,
                    }],
                  },
                  tooltips: {
                    callbacks: {
                      label: function (item: { index: any; datasetIndex: number }, data: { datasets?: any[] }) {
                        if (data.datasets && data.datasets[item.datasetIndex]) {
                          var dataset = data.datasets[item.datasetIndex];
                          var total = dataset.data.reduce(function (previousValue: any, currentValue: any) {
                            return previousValue + currentValue;
                          });
                          var currentValue = dataset.data[item.index];
                          var percentage = Math.floor((currentValue / total) * 100 + 0.5);
                          return percentage + "%";
                        }
                        return "";
                      }
                    }
                  }
                },
              });
            }
          });
      });
  });
      
    var lineCanvas = document.getElementById('lineChart') as HTMLCanvasElement;
    var lineCtx = lineCanvas.getContext('2d');
    if (lineCtx) {
      var lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              data: [30, 67, 54, 56, 82, 70, 80],
              label: "Royal Mothers",
              borderColor: "#07A685",
              backgroundColor: "rgb(62,149,205,0.1)",
            },
            {
              data: [50, 40, 60, 70, 30, 80, 90],
              label: "New Mothers",
              borderColor: "#FFB6C1",
              backgroundColor: "rgb(255,0,0,0.1)",
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
    var stackCanvas2 = document.getElementById('stackedBarChart2') as HTMLCanvasElement;
    var stCtx = stackCanvas2.getContext('2d');
    if (stCtx) {
      var stackedChart2 = new Chart(stCtx, {
        type: 'bar',
        data: {
          labels: ["volume", "Service", "Volume", "Service", "Volume", "Service"],
          datasets: [{
            label: "Services",
            backgroundColor: [
              "#1082EB",
              "#1082EB",
              "#1082EB",
              "#1082EB",
              "#1082EB",
              "#1082EB",
            ],
            data: [70, 40, 60, 20, 15, 10]
          },
          {
            label: "Volume",
            backgroundColor: [
              "#E75480",
              "#E75480",
              "#E75480",
              "#E75480",
              "#E75480",
              "#E75480",
            ],
            data: [30, 50, 20, 40, 25, 15]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                offsetGridLines: true
              }
            }]
          }
        }
      });
    }
    const mothersEndpoint = 'https://ajolla-backend-45e8c30af30d.herokuapp.com/api/mothers/list/';
    const lactationistsEndpoint = 'https://ajolla-backend-45e8c30af30d.herokuapp.com/api/lactationists/';
    const coursesEndpoint = 'https://ajolla-backend-45e8c30af30d.herokuapp.com/api/courses/';
    const appointmentsEndpoint = 'https://ajolla-backend-45e8c30af30d.herokuapp.com/api/appointments/';
    const fetchCounts = async () => {
      const mothersCount = await getTotalItems(mothersEndpoint);
      const lactationistsCount = await getTotalItems(lactationistsEndpoint);
      const coursesCount = await getTotalItems(coursesEndpoint);
      const appointmentsCount = await getTotalItems(appointmentsEndpoint);
      const coursesCountElement = document.getElementById('coursesCount');
      if (coursesCountElement) {
        coursesCountElement.textContent = coursesCount;
      }
      const appointmentsCountElement = document.getElementById('appointmentsCount');
      if (appointmentsCountElement) {
        appointmentsCountElement.textContent = appointmentsCount;
      }
      const mothersCountElement = document.getElementById('mothersCount');
      if (mothersCountElement) {
        mothersCountElement.textContent = mothersCount;
      }
      const lactationistsCountElement = document.getElementById('lactationistsCount');
      if (lactationistsCountElement) {
        lactationistsCountElement.textContent = lactationistsCount;
      }
    };
    fetchCounts();
  }, []);
  return (
    <Layout>
      <div className="container mx-auto ml-16">
        <div className="mt-10">
          <div className="grid grid-cols-2">
            <h1 className="text-4xl ml-32 font-bold mb-16">Dashboard</h1>
            <Image
     src="/LO.png"
      alt="Logo"
      width={120}
      height={80}
      style={{ marginTop: '-30px', marginLeft: '250px' }}
      
    /> 
          </div>
          <h1 className="text-4xl ml-32 font-semibold">Today Summary</h1>
          <div className="grid grid-cols-4 mt-16">
            <div className="w-4/6 h-40 bg-pink-100 rounded-2xl text-center ml-32">
              <FcDocument className="inline-block mr-2 text-5xl" />
              <h1 className="font-bold text-3xl py-5" id="coursesCount">Loading...</h1>
              <p>Courses Taken</p>
            </div>
            <div className="w-4/6 h-40 bg-yellow-100 rounded-2xl text-center ml-20">
              <FcCalendar className="inline-block mr-2 text-5xl" />
              <h1 className="font-bold text-3xl py-5" id="appointmentsCount">Loading...</h1>
              <p>Appointments</p>
            </div>
            <div className="w-4/6 h-40 bg-purple-100 rounded-2xl text-center ml-8">
              <FcBusinesswoman className="inline-block mr-2 text-5xl" />
              <h1 className="font-bold text-3xl py-5" id="mothersCount">Loading...</h1>
              <p>New Mothers</p>
            </div>
            <div className="w-4/6 h-40 bg-green-100 rounded-2xl text-center ">
              <FcBusinessman className="inline-block mr-2 text-5xl" />
              <h1 className="font-bold text-3xl py-5" id="lactationistsCount">Loading...</h1>
              <p>New Lactationists</p>
            </div>
          </div>
          <div className="grid grid-cols-2 ml-32">
            <div>
              <h1 className="mt-32 -mb-56 font-bold ml-16">Top Services</h1>
              <div className=" rounded-xl w-full mt-56 shadow-xl bg-white " style={{width:"85%" ,height:"40vh"}}>
                <canvas id="pieChart" width="360" height="240"></canvas>
              </div>
            </div>
            <div>
              <h1 className="mt-32 -mb-56 font-bold ml-16">Visitor Insights</h1>
              <div className=" rounded-xl w-full mt-56 shadow-xl bg-white" style={{width:"85%", height:"40vh"}}>
                <canvas id="lineChart" width="360" height="240"></canvas>
              </div>
            </div>
            <div>
              <h1 className="mt-32 -mb-56 font-bold ml-16">Volume Vs Service Level</h1>
              <div className="rounded-xl w-full mt-56  shadow-xl bg-white" style={{width:"85%",height:"40vh"}}>
                <canvas id="stackedBarChart2" width="720" height="550"></canvas>
              </div>
            </div>
            <div>
              <h1 className="mt-32 -mb-56 font-bold ml-16">Target Vs Reality</h1>
              <div className=" rounded-xl w-full mt-56 shadow-xl bg-white" style={{width:"85%", height:"40vh"}}>
                <canvas id="stackedBarChart1"  width="720" height="550"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Overview;