class plane{
    constructor(){
        this.canvasWidth = d3.select('#media-player')._groups[0][0].clientWidth
        this.canvasHeight = d3.select('#media-player')._groups[0][0].clientWidth

        this.canvas = d3.select('#media-player')
                        .append('div')
                        .attr('width',this.canvasWidth)
                        .attr('height',this.canvasHeight)

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( this.canvasWidth, this.canvasHeight );
        //renderer.setClearColor('black');
        // console.log(renderer.domElement)
        // console.log(this.canvas)
        this.canvas._groups[0][0].appendChild( renderer.domElement );

        this.scene = new THREE.Scene();
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.directLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directLight.position.set(300, 300, 300);
        this.camera = new THREE.PerspectiveCamera(70, this.canvasWidth/this.canvasHeight, .01, 1000);
        this.camera.position.set(700,300,700);
        
        const loader = new THREE.GLTFLoader();

        loader.load("../javascript/scene.glb", gltf => {

         // ADD MODEL TO THE SCENE
         console.log(gltf.scene.children[0])
         gltf.scene.children[0].position.y = 10;
         gltf.scene.children[0].position.x = 10;
         gltf.scene.children[0].scale.set(.01, .01, .01);
         this.scene.add(gltf.scene.children[0]);
         renderer.render(this.scene, this.camera);
    }, undefined,

        error => {
        console.log(error);
    });


        // loader.load( '../assets/scene.glb', function ( gltf ) {
        //     console.log(gltf.scene.children[0])
        //     this.scene.add( gltf.scene.children[0].children[0]);
        //     }, undefined, function ( error ) {
        //     console.error( error );
        //     } );

    }
}

export {plane}