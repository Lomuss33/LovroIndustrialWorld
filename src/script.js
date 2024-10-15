import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.5
mesh.position.y = 1.5
mesh.position.z = 1

mesh.position.set(0.7, 0.6, -2 )

scene.add(mesh)


// Scale
mesh.scale.set(4, 2, 13)

// Axes helper
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)
axesHelper.position.set(1, -1, 5)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 2, 15)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

console.log("length mesh: position from centar " + mesh.position.length())
console.log("positon to mesh: " + mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)))
console.log("object to camera position: " + mesh.position.distanceTo(camera.position))
console.log(mesh.position.length())
mesh.position.normalize() // position object on length (x) 1
console.log(mesh.position.length())