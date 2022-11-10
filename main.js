import * as THREE from './node_modules/three/build/three.module.js';

const main = () => {
  console.log('started...');
  //Scene
  const scene = new THREE.Scene();
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({ canvas });
  console.log('scene');

  //Camera
  const fov = 75;
  const aspect = 1.77;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  //Cube
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  const render = (time) => {
    time *= 0.001;
    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

main();
