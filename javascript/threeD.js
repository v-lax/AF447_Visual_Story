class plane{
    constructor(){
        this.canvasWidth = d3.select('#media-player')._groups[0][0].clientWidth
        this.canvasHeight = d3.select('#media-player')._groups[0][0].clientHeight

        this.canvas = d3.select('#media-player')
                        .append('div')
                        .attr('id','webGlCanvas')
                        .attr('width',this.canvasWidth)
                        .attr('height',this.canvasHeight)

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( this.canvasWidth, this.canvasHeight );
    
        this.canvas._groups[0][0].appendChild( renderer.domElement );

        this.scene = new THREE.Scene();
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.camera = new THREE.PerspectiveCamera(70, this.canvasWidth/this.canvasHeight, 10, 10000);
        this.camera.position.set(-700,200,0);
        this.scene.add(this.ambientLight)

        const controls = new THREE.OrbitControls( this.camera, renderer.domElement );
        controls.addEventListener('change',() => renderer.render(this.scene, this.camera))
        
        const loader = new THREE.GLTFLoader();
        loader.load("../javascript/scene.glb", gltf => {

         // ADD MODEL TO THE SCENE
         this.aircraft = gltf.scene.children[0]
         this.aircraft.position.y = 10;
         this.aircraft.position.x = 10;
         this.aircraft.scale.set(.01, .01, .01);
         this.scene.add(this.aircraft);
         renderer.render(this.scene, this.camera);
         //animate()
    }, undefined,

        error => {
        console.log(error);
    });

    // function animate(){
    //     renderer.render(this.scene, this.camera);
    //     requestAnimationFrame(animate)
    // }


        // loader.load( '../assets/scene.glb', function ( gltf ) {
        //     console.log(gltf.scene.children[0])
        //     this.scene.add( gltf.scene.children[0].children[0]);
        //     }, undefined, function ( error ) {
        //     console.error( error );
        //     } );

    }
}

export {plane}