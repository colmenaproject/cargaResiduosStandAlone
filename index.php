<!DOCTYPE html>
<html>
   <head>
      <title>Formulario de Carga de Residuos StandAlone</title>
      <meta charset="UTF-8">
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="script/index.js"></script>
      <link rel="stylesheet" type="text/css" href="css/styles.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
      <script src="//code.jquery.com/jquery-1.12.4.js"></script>
      <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.jquery.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.css">

      <meta name="description" content="Formulario de Carga de Residuos StandAlone<">
      <meta name="keywords" content="Proyecto Colmena">
      <meta name="author" content="Damián Rotta">
   </head>
   <body>
      <form class="text-center" action="" method="POST">
         <div id="users">
            <label>Usuario:</label>
            <select class="chosen-select">
               <option>A</option>
               <option>AAA</option>
               <option>AAAAA</option>
            </select>
         </div>
         <script src="script/datepicker-conf.js"></script>
         <p>Fecha: <input type="text" id="datepicker"></p>   
         <input type="submit" value="Registrar" />
      </form>
   </body>
<script>
   $(".chosen-select").chosen();
</script>
</html>
