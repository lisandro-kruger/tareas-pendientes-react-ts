### Proyecto de Aplicación de Tareas
Este proyecto es una aplicación de tareas que permite a los usuarios agregar y eliminar tareas. Puedes ver la aplicación en funcionamiento aquí.

[Ver la Aplicación de Tareas](https://tareas-pendientes-react-ts.netlify.app)

### Estructura del Proyecto
El proyecto consta de varios archivos que se encargan de diferentes aspectos de la aplicación:

### ToDoApp.tsx 
Esta es la clase principal que maneja la lógica de la aplicación de tareas. Utiliza el hook useState de React para manejar el estado de la nueva tarea y la lista de tareas. Define dos funciones, handleAddTask y handleBorrarTarea, para agregar y borrar tareas respectivamente. Renderiza un formulario para agregar nuevas tareas y una lista de tareas existentes.

### ListaTareas.tsx 
Esta clase toma una lista de tareas y una función para borrar tareas como props. Renderiza una lista de componentes Tarea, pasando la tarea individual y la función para borrar la tarea a cada componente Tarea.

### Tarea.tsx
Esta clase toma una tarea y una función para borrar la tarea como props. Renderiza la tarea y un botón para borrar la tarea.

### index.tsx 
Este es el punto de entrada de la aplicación. Importa ToDoApp y lo renderiza en el elemento con id ‘root’ del DOM.
