<script>
	import Canvas from './components/canvas/Canvas.svelte'
	import Menu from './components/Menu.svelte'
	import Timeline from './components/Timeline.svelte'
</script>

<div id="wiggle-effects" class="min-vh-100 min-vw-100 d-flex flex-column">
	<nav class="navbar navbar-light px-4 border-bottom">
		<a class="navbar-brand" href=".">
			Wiggle✨Fx
		</a>
		<span>
			💖 Check out <strong>Hozzerino</strong>;
			<a href="https://www.twitch.tv/hozzerino" class="btn btn-primary btn-sm"><i class="bi bi-twitch"></i></a>
			<a href="https://twitter.com/Hozzerino" class="btn btn-primary btn-sm"><i class="bi bi-twitter"></i></a>			
		</span>
	</nav>

	<main class="d-flex flex-row align-items-stretch flex-grow-1">
		<Canvas class="flex-grow-1 mh-100 w-100 bg-light" canvas-class="w-75 bg-secondary rounded" />
		<Menu class="w-25 border-start" />
	</main>
	
	<footer class="border-top">
		<Timeline />
	</footer>
</div>