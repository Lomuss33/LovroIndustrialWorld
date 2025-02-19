import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Exterior
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('warehouse2')
        }

        // Resource
        this.resource = this.resources.items.warehouse2

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(10, 10, 10)
        this.model.rotation.y = -(Math.PI * 1/6)
        this.scene.add(this.model)

        this.model.position.x = -3
        this.model.position.z = 3

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}