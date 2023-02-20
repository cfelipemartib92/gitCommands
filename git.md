# Comandos GIT

-----DOCUMENTACIÓN https://git-scm.com/docs/git#_git_commands---------------------

@  Estructura:
    *Directorio de trabaajo ->
    *Áea de ensayo
    *Repositorio Local

0. Simbolos
    * ? = Existe pero no está en seguimiento
    * A = esta en área temporal (staging area) (monitoreo)
    *   = No aparece nada  - ya está en repositiorio local
    * M = Está modificado sin guardar el cambio (sin respaldar)
    * D = 
    Simbolos en Visual studio
        * U = Unfollow
        * A = Added 
        * M = Modified

0. 5 Configuración cuando sea necesario 
    * git config --global user.username "Juan"
    * git config --global user.email "cfelipemartib@gmail.com"

1. Respaldo: %_ git init
    * Sólo se ejecuta al comenzar un proyecto, o hacer el seguimiento de un proyecto
    * Crea dos áreas para hacer seguimiento
        1. ára de ensayo (temporal)
        2. Area de rep local (donde se almacenan fotos figas a nuestros archivos para rescatar)
2. Seguimiento de archivos: %_ git add
    * Para hacerlo en un sólo archivo agregamos %_ git add nombre_archivo.tipo
        *ejemplo: %_ git add index.html
        * Lleva el archivo del directorio al área de ensayo
3. Traslado al repo local: %_ git commmit -m "Descripcion"
    * Para ahcerlo con un sólo archivo agregamos 
        %_ git commit -m "Comienzo del proyecto"
            * Sólo se "commit" lo que estaba en el área de ensayo
            * Se desaparecen del status
    * Donde se crea el respaldo en el rep local
    * Se puede hacer un respaldo de lo que ha sido modificado M con un add y luego el commit

    3.5 Se pueden hacer las dos operaciones al mismo tiempo: %_ git commit -am "xxx"

4. Comprobar la constancia %_ git status -s
    * Listado de todos los archivos que tenemos en el proyecto
    * Los ? significan que ninguno tiene seguimiento de git

5. Para saber cuantos commit he realizado: %_ git log --oneline
    * Imprime un listado de todos los commit 

6. Para restaurar un commit anterior: %_ git reset --hard (código a restaurar)
    * Restauración del archvio al commit que queremos restaurar (borra todas las instantaneas hasta ese punto)

7. Subir una copia de seguridad en github: 
    * Copia de seguridad en lka nube para rescatarlo

8. Para modificar el nombre de un commit: %_ git commit --amend
    * abrimos el editor bim
        * Comando para emepzar a editar %_ :i
        * Pone un nombre
         Cierra con : %_ :wq! (para sobreescribir y listo)

9. Subir un repositorio que ya existe
    * %_ git remote add origin https://github.com/cfelipemartib92/gitCommands.git
    * %_ git branch -M main
    * %_ git push -u origin main

10. Traer pequeñas modificaciones realizados en gitHub al local: %_ git pull 

11. Usamos Tags - especificamos versiones del proyecto: 
    * %_ git tag "nombre-id" -m "Versión 1 del projecto"
    * Quiere decir que creamos la versión 1 del proyecto tag en local
    * Subimos el tag:
        * %_ git push --tags

12. Clonar el repositorio: %_ git clone ("Url de github con el code del repo")
    * Se necesita copiar la url del proyecto en code->copiar
    * Se hace desde el bash abierto en lña carpeta donde voy a clonar

13. Crear ramas: %_ git branch 'nombre'

14. Ver las ramas del projecto: %_ git branch y en cual me encuentro
    - la que tiene el * es en la que me encuentro

15. Moverme a una rama nueva: %_ git checkout (nombre de rama a la que me queiro mover)
    * Desde acá ya puedo add. commit y push

16. Para hacer un merge desde la rama master comando: %_ git merge (tama para merge) 
    * Resolver conflictos

17. Borrar Rama que ya mergie y no sirve: %_ git branch -d "Nombre de la rama"
    * Se borra el log --oneline

18. Para utilizar las herramientas de visual studio Code y tambien desde la barra de abajo para maniobrar el git
    * Podemos crear nuevas branches
    * Commit directamente sin add con el chulito o ctrl + enter
    * Aceptar los both changes

19. Crear Git clone:
    * Crea un repop nuevo y copia url 
    * Abre VScode vacio 
    * abre buscador ctrl p
    * escribe git clone y monto la url del repositorio
    * Nos pide el repositorio donde vamos aclonar
