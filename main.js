import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// // マウスの制御の事前準備
// // カーソル位置＆マウス位置の取得
// let cursorX = 0;
// let cursorY = 0;
// window.addEventListener("mousemove", (event) => {
//     // console.log(event);
//     // console.log(event.clientX);
//     // cursorX = event.clientX;
//     // cursorX,Y sizeの調整 (-0.5,0.5) +-均等に
//     cursorX = event.clientX / window.innerWidth - 0.5;
//     cursorY = event.clientY / window.innerHeight - 0.5;
//     // console.log(cursorY);
// });

// シーン
const scene = new THREE.Scene()

// カメラ
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// ジオメトリ（骨組み）
const geometry = new THREE.BoxGeometry(1, 1, 1)
// マテリアル（材質など）
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// オブジェクト
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// レンダラー
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//　カメラの位置
camera.position.z = 5

// カメラの制御
// new OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement)

// 慣性付与
controls.enableDamping = true

// シーン＆カメラのレンダリング
renderer.render(scene, camera)

// アニメーション
function animate() {
  // オブジェクトのアニメーション(入れ子構造)
  window.requestAnimationFrame(animate)

  // オブジェクトの回転
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  // カメラの制御
  // // camera.position.x = cursorX * 3;
  // // camera.position.y = - cursorY * 3;
  // camera.position.x = Math.sin(Math.PI * 2 * cursorX) * 3;
  // camera.position.z = Math.cos(Math.PI * 2 * cursorX) * 3;
  // // camera.position.y = - cursorY * 5;
  // camera.position.y = - Math.sin(Math.PI * 2 * cursorY) * 3;
  // camera.lookAt(cube.position);

  // カメラの更新
  controls.update()
  // シーン＆カメラのレンダリング
  renderer.render(scene, camera)
}

animate()
