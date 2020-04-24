import React, {Component} from 'react';
import {Runtime, Inspector, Library} from "./sunburst/runtime";

import define from './sunburst/80523f348bb7c3b0@749';

const data = `
        NZX-Shares,40
        NZX-Debt,40
        NZX-Funds,20
        NYSE-Shares,30
        `;

class Breakdown extends Component {

    sunburstRef = React.createRef<HTMLDivElement>();
    breadcrumbRef = React.createRef<HTMLDivElement>();
    runtime = new Runtime();

    componentDidMount(): void {
        const main = this.runtime.module(define, name =>
        {
            if (name == 'viewof sunburst') {
                return new Inspector(this.sunburstRef.current)
            }else if (name == 'breadcrumb') {
                return new Inspector(this.breadcrumbRef.current)
            }
        });
        main.redefine("portfolioValue", "34.00");
        main.redefine("test", data);
    }

    render() {
        return (
            <div>
                <div ref={this.breadcrumbRef}></div>
                <div ref={this.sunburstRef}></div>
            </div>
        );
    }

}

export default Breakdown;

