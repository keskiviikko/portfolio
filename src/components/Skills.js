import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Themes
am4core.useTheme(am4themes_animated);

export default class Skills extends Component {
  componentDidMount() {
    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.legend = new am4charts.Legend();

    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    networkSeries.data = [
      {
        name: "Project Management",
        collapsed: true,
        value: 10,
        children: [
          {
            name: "Scrum",
            value: 5,
            children: [
              {
                name: "Professional Scrum Master",
                value: 2
              }
            ]
          },
          {
            name: "Version control",
            value: 5,
            children: [
              {
                name: "Git",
                value: 2
              },
              {
                name: "GitHub",
                value: 2
              },
              {
                name: "Bitbucket",
                value: 2
              }
            ]
          }
        ]
      },
      {
        name: "Web Development",
        collapsed: true,
        value: 10,
        children: [
          {
            name: "HTTP/HTTPS and APIs",
            value: 5
          },
          {
            name: "CLI",
            value: 5,
            children: [
              {
                name: "Terminal",
                value: 2
              },
              {
                name: "cmd",
                value: 2
              }
            ]
          },
          {
            name: "JavaScript Algorithms and Data Structures",
            value: 5
          },
          {
            name: "regex",
            value: 5
          },
          {
            name: "DevTools",
            value: 5
          },
          {
            name: "TDD",
            value: 5,
            children: [
              {
                name: "Jest",
                value: 2
              },
              {
                name: "Enzyme",
                value: 2
              },
              {
                name: "Jasmine",
                value: 2
              }
            ]
          },
          {
            name: "Web security",
            value: 5,
            children: [
              {
                name: "OWASP",
                value: 2
              },
              {
                name: "CORS",
                value: 2
              },
              {
                name: "HTTPS",
                value: 2
              }
            ]
          },
          {
            name: "AWS fundamentals",
            value: 5
          }
        ]
      },
      {
        name: "Front-end",
        collapsed: true,
        value: 10,
        children: [
          {
            name: "HTML5",
            value: 5
          },
          {
            name: "CSS",
            value: 5,
            children: [
              {
                name: "layouts",
                value: 2
              },
              {
                name: "responsive design",
                value: 2
              },
              {
                name: "Bootstrap",
                value: 2
              },
              {
                name: "Material-UI",
                value: 2
              }
            ]
          },
          {
            name: "JavaScript",
            value: 5,
            children: [
              {
                name: "ES6+",
                value: 2
              },
              {
                name: "Fetch API",
                value: 2
              },
              {
                name: "Ajax",
                value: 2
              },
              {
                name: "jQuery",
                value: 2
              }
            ]
          },
          {
            name: "Package managers",
            value: 5,
            children: [
              {
                name: "npm",
                value: 2
              },
              {
                name: "yarn",
                value: 2
              }
            ]
          },
          {
            name: "Build Tools",
            value: 5
          },
          {
            name: "Frameworks",
            value: 5,
            children: [
              {
                name: "React",
                value: 2
              },
              {
                name: "Angular",
                value: 2
              },
              {
                name: "Vue.js",
                value: 2
              }
            ]
          },
          {
            name: "TypeScript",
            value: 5
          },
          {
            name: "Mobile Applications",
            value: 5,
            children: [
              {
                name: "React Native",
                value: 2
              },
              {
                name: "Android Studio",
                value: 2
              }
            ]
          },
          {
            name: "Data visualization",
            value: 5,
            children: [
              {
                name: "amCharts",
                value: 2
              }
            ]
          }
        ]
      },
      {
        name: "Back-end",
        collapsed: true,
        value: 10,
        children: [
          {
            name: "Node.js",
            value: 5,
            children: [
              {
                name: "npm",
                value: 2
              },
              {
                name: "yarn",
                value: 2
              },
              {
                name: "Express",
                value: 2
              }
            ]
          },
          {
            name: "Ruby",
            value: 5,
            children: [
              {
                name: "RubyGems",
                value: 2
              },
              {
                name: "Ruby on Rails",
                value: 2
              }
            ]
          },
          {
            name: "Databases",
            value: 5,
            children: [
              {
                name: "PostgreSQL",
                value: 2
              },
              {
                name: "MongoDB",
                value: 2
              }
            ]
          },
          {
            name: "REST API Design",
            value: 5,
            children: [
              {
                name: "Postman",
                value: 2
              }
            ]
          },
          {
            name: "Authentication",
            value: 5
          }
        ]
      },
      {
        name: "Language skills",
        collapsed: true,
        value: 10,
        children: [
          {
            name: "Finnish",
            value: 5
          },
          {
            name: "English",
            value: 5
          },
          {
            name: "Japanese",
            value: 5
          }
        ]
      }
    ];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
    networkSeries.dataFields.collapsed = "collapsed";

    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = "{name}";
    networkSeries.fontSize = 15;
    networkSeries.maxLevels = 2;
    networkSeries.minRadius = am4core.percent(2);
    networkSeries.maxRadius = am4core.percent(8);
    networkSeries.manyBodyStrength = -16;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div>
        <div id="chartdiv"></div>
      </div>
    );
  }
}
