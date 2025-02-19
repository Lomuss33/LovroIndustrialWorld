import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    // SET GEOMETRY
    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(50, 64)
    }

    // SET TEXTURES
    setTextures() {
        this.textures = {};
    
        // Load the concrete diffuse texture (color)
        this.textures.diffuse = this.resources.items.concrete2Diff;
        this.textures.diffuse.colorSpace = THREE.SRGBColorSpace;
        this.textures.diffuse.repeat.set(1.5, 1.5);
        this.textures.diffuse.wrapS = THREE.RepeatWrapping;
        this.textures.diffuse.wrapT = THREE.RepeatWrapping;
    
        // Load the concrete displacement texture
        this.textures.displacement = this.resources.items.concrete2Disp;
        this.textures.displacement.repeat.set(1.5, 1.5);
        this.textures.displacement.wrapS = THREE.RepeatWrapping;
        this.textures.displacement.wrapT = THREE.RepeatWrapping;
    
        // Load the concrete normal texture (EXR format)
        this.textures.normal = this.resources.items.concrete2Norm;
        this.textures.normal.repeat.set(1.5, 1.5);
        this.textures.normal.wrapS = THREE.RepeatWrapping;
        this.textures.normal.wrapT = THREE.RepeatWrapping;
    
        // Load the concrete roughness texture
        this.textures.roughness = this.resources.items.concrete2Rough;
        this.textures.roughness.repeat.set(1.5, 1.5);
        this.textures.roughness.wrapS = THREE.RepeatWrapping;
        this.textures.roughness.wrapT = THREE.RepeatWrapping;
    }
    

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.diffuse, // Correctly use the diffuse map
            normalMap: this.textures.normal,
            roughnessMap: this.textures.roughness,
            displacementMap: this.textures.displacement,
            displacementScale: 0.1 // Adjust for the desired displacement effect
        });
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}