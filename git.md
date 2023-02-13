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




D:\Node\07-Practica 