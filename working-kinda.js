var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 5000, window.innerWidth/window.innerHeight, 0.1, 10000 );
			var renderer = new THREE.WebGLRenderer();

			

			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 2, 50, 2 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );

			var geometry = new THREE.BoxGeometry( 50, 2, 2 );
			var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
			var cube2 = new THREE.Mesh( geometry, material );
			scene.add( cube, cube2 ); 

			cube.position.x = 25;

			camera.position.set(300,300,300);
			camera.up = new THREE.Vector3(0,0,1);
			camera.lookAt(new THREE.Vector3(10,0,0));
			
			var render = function () {
				requestAnimationFrame( render );
				renderer.render(scene, camera);
			};

			render()


			var flip = function () {
			cube.rotation.x += 1;
			cube2.rotation.x += 1;
			renderer.render(scene, camera);
			}

			var rotate = function () {
			cube.rotation.y += 1;
			cube2.rotation.y += 1;
			renderer.render(scene, camera);
			}

			var spin = function () {
			cube.rotation.z += 1;
			cube2.rotation.z += 1;
			renderer.render(scene, camera);
			}

			var cameraRight = function () {
				camera.position.x += 1;
				renderer.render(scene, camera);
			}

			var cameraLeft = function () {
				camera.position.x += -1;
				renderer.render(scene, camera);
			}

			var cameraZoomOut = function () {
				camera.position.z += 20;
				renderer.render(scene, camera);
			}

			var cameraZoomIn = function () {
				camera.position.z += -20;
				renderer.render(scene, camera);
			}

			var cameraRotateLeft = function () {
				camera.rotation.y += -.1;
				renderer.render(scene, camera);
			}

			var cameraRotateRight = function () {
				camera.rotation.y += .1;
				renderer.render(scene, camera);
			}

			var cameraPanUp = function () {
				camera.rotation.x += -.1;
				renderer.render(scene, camera);
			}

			var cameraPanDown = function () {
				camera.rotation.x += .1;
				renderer.render(scene, camera);
			}