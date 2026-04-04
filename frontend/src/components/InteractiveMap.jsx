import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import '../styles/InteractiveMap.css';
import sisaPinLogo from '../assets/logo.png';

const pinData = [
    { name: 'Canada',      flag: '🇨🇦', coords: [-75.7, 45.4] },
    { name: 'UK',          flag: '🇬🇧', coords: [-0.1,  51.5] },
    { name: 'Egypt',       flag: '🇪🇬', coords: [31.2,  30.1] },
    { name: 'KSA',         flag: '🇸🇦', coords: [46.7,  24.7] },
    { name: 'UAE',         flag: '🇦🇪', coords: [55.3,  25.2] },
    { name: 'Bahrain',     flag: '🇧🇭', coords: [50.6,  26.5] },
    { name: 'Oman',        flag: '🇴🇲', coords: [58.6,  23.6] },
    { name: 'Pakistan',    flag: '🇵🇰', coords: [69.3,  30.4] },
    { name: 'Bangladesh',  flag: '🇧🇩', coords: [90.4,  23.7] },
    { name: 'Philippines', flag: '🇵🇭', coords: [121.0, 14.6] },
    { name: 'Japan',       flag: '🇯🇵', coords: [138.2, 36.2] },
];

const W = 1100;
const H = 530;

const InteractiveMap = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current)
            .attr('viewBox', `0 0 ${W} ${H}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');

        svg.selectAll('*').remove();

        const projection = d3.geoNaturalEarth1()
            .scale(165)
            .translate([W / 2, H / 2 + 15]);

        const path = d3.geoPath().projection(projection);

        const defs = svg.append('defs');

        /* ── Dot pattern for land ── */
        defs.append('pattern')
            .attr('id', 'dotPattern')
            .attr('x', 0).attr('y', 0)
            .attr('width', 9).attr('height', 9)
            .attr('patternUnits', 'userSpaceOnUse')
            .append('circle')
            .attr('cx', 4.5).attr('cy', 4.5).attr('r', 2.6)
            .attr('fill', '#d80027')
            .attr('opacity', 0.6);

        /* ── Fetch world topojson ── */
        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then((world) => {
                const land = topojson.feature(world, world.objects.land);

                defs.append('clipPath')
                    .attr('id', 'landClip')
                    .append('path')
                    .datum(land)
                    .attr('d', path);

                /* ── Land dotted fill ── */
                svg.append('rect')
                    .attr('width', W)
                    .attr('height', H)
                    .attr('fill', 'url(#dotPattern)')
                    .attr('clip-path', 'url(#landClip)');

                /* ── Pins ── */
                let activeTooltip = null;

                pinData.forEach((country, i) => {
                    const [x, y] = projection(country.coords);

                    const g = svg.append('g')
                        .attr('class', 'pin-group')
                        .attr('transform', `translate(${x},${y})`);

                    /* Pin circle & logo */
                    const pinBg = g.append('g').attr('class', 'pin-outer');

                    pinBg.append('circle')
                        .attr('r', 12)
                        .attr('fill', '#111827')
                        .attr('stroke', '#fff')
                        .attr('stroke-width', 2);

                    const clipId = `logoClip-${i}`;
                    defs.append('clipPath')
                        .attr('id', clipId)
                        .append('circle')
                        .attr('cx', 0).attr('cy', 0).attr('r', 8);

                    pinBg.append('image')
                        .attr('href', sisaPinLogo)
                        .attr('x', -8).attr('y', -8)
                        .attr('width', 16).attr('height', 16)
                        .attr('clip-path', `url(#${clipId})`)
                        .attr('preserveAspectRatio', 'xMidYMid meet')
                        .style('filter', 'brightness(0) invert(1)');

                    /* Country Label below pin */
                    const label = g.append('text')
                        .attr('class', 'pin-label')
                        .attr('y', 28)
                        .attr('text-anchor', 'middle')
                        .attr('font-size', '14px')
                        .attr('font-weight', '800')
                        .attr('font-family', 'system-ui, sans-serif')
                        .attr('fill', '#111827')
                        .attr('opacity', 0)
                        .style('text-transform', 'uppercase')
                        .text(country.name);

                    /* Hover interactions */
                    function showEffects() {
                        pinBg.transition().duration(300).ease(d3.easeBackOut)
                            .attr('transform', 'scale(1.8)');
                        label.transition().duration(300)
                            .attr('opacity', 1)
                            .attr('y', 36);
                    }

                    function hideEffects() {
                        pinBg.transition().duration(250)
                            .attr('transform', 'scale(1)');
                        label.transition().duration(250)
                            .attr('opacity', 0)
                            .attr('y', 28);
                    }

                    g.on('mouseenter', showEffects)
                     .on('mouseleave', hideEffects)
                     .on('touchstart', (e) => { e.preventDefault(); showEffects(); })
                     .on('touchend',   (e) => { e.preventDefault(); setTimeout(hideEffects, 1800); });
                });
            })
            .catch((err) => {
                console.error('Failed to load world map data:', err);
            });

        return () => {
            svg.selectAll('*').remove();
        };
    }, []);

    return (
        <div className="interactive-map-container">
            <div className="map-wrapper">
                <svg ref={svgRef} />
            </div>

            <div className="country-pills">
                {pinData.map((c) => (
                    <div key={c.name} className="country-pill">
                        <span className="pill-flag">{c.flag}</span>
                        <span>{c.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveMap;