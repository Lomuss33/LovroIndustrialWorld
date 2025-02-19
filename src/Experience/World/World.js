import * as THREE from 'three';
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Exterior from '../Factory/Exterior.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Create an AxesHelper with a length of 5 (you can adjust this as needed)
        const axesHelper = new THREE.AxesHelper(5);

        // Add the helper to your scene
        this.scene.add(axesHelper);


        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            //this.floor = new Floor()
            this.exterior = new Exterior()
            this.environment = new Environment()

            // stats.js
            javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

        })
    }

    update()
    {
    
    }
}