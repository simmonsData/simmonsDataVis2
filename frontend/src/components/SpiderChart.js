import React, { Component } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

class SpiderChart extends React.Component {

    

    render() {
        const dataSets = this.props;
        console.log(dataSets);
        //Dataset for the SpiderChart. Entries in Label:Value. Value must be a int for the RadarChart to accept it.
        
        
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
                    captions={captions}
                    data={dataSets}
                    options={defaultOptions}
                    size={450}
                />
            </div>
        );
    }
}

export default SpiderChart;