import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import '../styles/InteractiveMap.css';
import sisaPinLogo from '../assets/SISA Logo2_transparent.webp';

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
            .attr('fill', '#8A5AC2')
            .attr('opacity', 0.82);

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
                        .attr('transform', `translate(${x},${y})`)
                        .attr('cursor', 'pointer')
                        .attr('pointer-events', 'all');

                    /* Pin circle & logo */
                    const pinBg = g.append('g').attr('class', 'pin-outer');

                    pinBg.append('circle')
                        .attr('r', 16)
                        .attr('fill', '#fff')
                        .attr('stroke', '#4c1d95')
                        .attr('stroke-width', 1.5)
                        .attr('opacity', 0.95);

                    pinBg.append('image')
                        .attr('href', sisaPinLogo)
                        .attr('x', -11)
                        .attr('y', -11)
                        .attr('width', 22)
                        .attr('height', 22)
                        .attr('preserveAspectRatio', 'xMidYMid meet')
                        .style('pointer-events', 'none');

                    /* Country Label below pin */
                    const label = g.append('text')
                        .attr('class', 'pin-label')
                        .attr('y', 35)
                        .attr('text-anchor', 'middle')
                        .attr('font-size', '14px')
                        .attr('font-weight', '700')
                        .attr('font-family', '"Inter", sans-serif')
                        .attr('fill', '#4c1d95')
                        .attr('opacity', 0)
                        .attr('pointer-events', 'none')
                        .style('text-shadow', '0 1px 2px rgba(255,255,255,0.8)')
                        .text(country.name);

                    /* Hover interactions */
                    function showEffects() {
                        pinBg.transition().duration(400).ease(d3.easeCubicOut)
                            .attr('transform', 'scale(2)');
                        label.transition().duration(400).ease(d3.easeCubicOut)
                            .attr('opacity', 1)
                            .attr('y', 52);
                    }

                    function hideEffects() {
                        pinBg.transition().duration(300).ease(d3.easeCubicInOut)
                            .attr('transform', 'scale(1)');
                        label.transition().duration(300).ease(d3.easeCubicInOut)
                            .attr('opacity', 0)
                            .attr('y', 35);
                    }

                    g.on('mouseenter', showEffects)
                     .on('mouseleave', hideEffects)
                     .on('touchstart', (e) => { e.preventDefault(); showEffects(); })
                     .on('touchend',   (e) => { e.preventDefault(); setTimeout(hideEffects, 2000); });
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
        </div>
    );
};

export default InteractiveMap;