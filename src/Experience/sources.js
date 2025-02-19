export default [
    // Enviorment STREET CUBE TEXTURE
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg'
        ]
    },
    // CONCRETE FLOOR diff, disp, normal, rough
    {
        name: 'concreteDiff',
        type: 'texture',
        path: '/textures/concreteFloor/concrete_floor_worn_001_diff_1k.jpg'
    },
    {
        name: 'concreteDisp',
        type: 'texture',
        path: '/textures/concreteFloor/concrete_floor_worn_001_disp_1k.png'
    },
    {
        name: 'concreteNorm',
        type: 'exrLoader',
        path: '/textures/concreteFloor/concrete_floor_worn_001_nor_gl_1k.exr'
    },
    {
        name: 'concreteRough',
        type: 'texture',
        path: '/textures/concreteFloor/concrete_floor_worn_001_rough_1k.jpg'
    },
    // Painted CONCRETE diff, disp, normal, rough
    {
        name: 'concrete2Diff',
        type: 'texture',
        path: '/textures/painted_concrete_1k/painted_concrete_diff_1k.jpg'
    },
    {
        name: 'concrete2Disp',
        type: 'texture',
        path: '/textures/painted_concrete_1k/painted_concrete_disp_1k.jpg'
    },
    {
        name: 'concrete2Norm',
        type: 'texture',
        path: '/textures/painted_concrete_1k/painted_concrete_nor_gl_1k.jpg'
    },
    {
        name: 'concrete2Rough',
        type: 'texture',
        path: '/textures/painted_concrete_1k/painted_concrete_arm_1k.jpg'
    },
    // OLD FOX ANIMATION MODEL
    {
        name: 'foxModel',
        type: 'gltfModel',
        path: 'models/Fox/glTF/Fox.gltf'
    },
    // Warehouse 2 MODEL
    {
        name: 'warehouse2',
        type: 'gltfModel',
        path: '/models/warehouse2/shed.gltf'
    }
]