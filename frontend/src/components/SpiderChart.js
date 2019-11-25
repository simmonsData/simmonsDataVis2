import React, { Component } from 'react';
import { Button, Header, Form, Grid, Divider } from 'semantic-ui-react'
import { redirect } from 'react-router-dom'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import data from '../data/data.js';

class SpiderChart extends React.Component {

    

    render() {


        //Dataset for the SpiderChart. Entries in Label:Value. Value must be a int for the RadarChart to accept it.
        const dataFile = [
            {
            data: {
                gender: 1,
                race: 1,
                major: 1,
                E2: 0.25,
                E3: 0.50,
                E4: 0.75,
                E5: 1.0,
                E6: 0.75,
                E7: 0.50,
                E8: 0.25,
                E9: 1.0,
            },
            meta: {color: 'blue'} 
            },
            {
            data: {
                gender: 2,
                race: 2,
                major: 2,
                E2: 0.50,
                E3: 0.75,
                E4: 1.0,
                E5: 0.75,
                E6: 0.50,
                E7: 0.25,
                E8: 0.50,
                E9: 1.0,
            },
            meta: {color: 'green'}
            },
            {
            data: {
                gender: 3,
                race: 3,
                major: 3,
                E2: 0.75,
                E3: 1.0,
                E4: 0.50,
                E5: 0.75,
                E6: 0.25,
                E7: 0.25,
                E8: 0.25,
                E9: 0.25,
            },
            meta: {color: 'red'}
            }
        ];
        
        //Captions for the SpiderChart. Entries in Label:Value. 
        const captions = {
            E2: "Practical Ingenuity",
            E3: "Creativity",
            E4: "Communication",
            E5: "Business & Management",
            E6: "Leadership",
            E7: "High Ethical Standards",
            E8: "Professionalism",
            E9: "Dynamism, Agility, Resilience, and Flexibility" 
        }

        const noSmoothing = points => {
            let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
            for (let i = 1; i < points.length; i++) {
              d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
            }
            return d + 'z';
          };

        const defaultOptions = {
            size: 200,
            axes: true, // show axes?
            scales: 3, // show scale circles?
            captions: true, // show captions?
            captionMargin: 10,
            dots: false, // show dots?
            zoomDistance: 1.2, // where on the axes are the captions?
            setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
            smoothing: noSmoothing, // shape smoothing function
            axisProps: () => ({ className: 'axis' }),
            scaleProps: () => ({ className: 'scale', fill: 'none' }),
            shapeProps: () => ({ className: 'shape' }),
            captionProps: () => ({
              className: 'caption',
              textAnchor: 'middle',
              fontSize: 10,
              fontFamily: 'sans-serif'
            }),
            dotProps: () => ({
              className: 'dot',
              mouseEnter: (dot) => { console.log(dot) },
              mouseLeave: (dot) => { console.log(dot) }
            })
        };

        return (
            <div class="container">
                <RadarChart
                    captions={
                        captions
                    }
                    data={dataFile}
                        options={defaultOptions}
                    size={450}
                />
            </div>
        );
    }
}

export default SpiderChart;