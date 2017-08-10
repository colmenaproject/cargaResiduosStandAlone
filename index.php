<!DOCTYPE html>
<html>
<head>
	<title>Formulario de Carga de Residuos StandAlone</title>
	<meta charset="UTF-8">
	<meta name="description" content="Formulario de Carga de Residuos StandAlone<">
	<meta name="keywords" content="Proyecto Colmena">
	<meta name="author" content="Damián Rotta">
	<script src="index.js"></script>
</head>
<body>
<form action="" method="POST">
<!--TODO Traer los options desde la tabla residuo_capacidad -->
<div>
		<input id="range_0" type="range" min="0" max="150" value="0" onload="createRanges()" oninput="updateRange(this.id)" />
</div>



</form>

</body>

</html>
