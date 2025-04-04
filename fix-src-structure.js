import { NodeHfs } from "@humanfs/node";
import path from 'path';

const hfs = new NodeHfs();

async function fixSrcStructure() {
  const projectRoot = 'F:\\Proyectos\\Mercado-Segunda-Mano';
  
  // Usamos path.join para crear rutas absolutas de manera segura
  const originalSrcPath = path.join(projectRoot, 'src');
  const duplicatedSrcPath = path.join(projectRoot, 'repository', 'src');

  // Verificamos si la carpeta src está duplicada
  const isOriginalSrc = await hfs.isDirectory(originalSrcPath);
  const isDuplicatedSrc = await hfs.isDirectory(duplicatedSrcPath);

  if (isOriginalSrc && isDuplicatedSrc) {
    console.log('Moviendo archivos de la carpeta src duplicada...');
    // Movemos todo el contenido de la carpeta duplicada a la original
    await hfs.moveAll(duplicatedSrcPath, originalSrcPath);
    
    console.log('Eliminando carpeta src duplicada...');
    // Eliminamos la carpeta vacía
    await hfs.delete(duplicatedSrcPath);
    
    // Verificamos si podemos eliminar la carpeta repository
    const repositoryPath = path.join(projectRoot, 'repository');
    const remainingFiles = await hfs.list(repositoryPath);
    if (remainingFiles.length === 0) {
      console.log('Eliminando carpeta repository vacía...');
      await hfs.delete(repositoryPath);
    }

    console.log('¡Proceso completado con éxito!');
  } else {
    console.log('No se encontró una estructura duplicada de src para corregir.');
  }
}

fixSrcStructure().catch(error => {
  console.error('Error durante la corrección de la estructura:', error);
});
