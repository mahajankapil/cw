Place brand logo image files in this folder:

  public/assets/brands/

Then add the filenames (including extension) to the JSON manifest:

  public/assets/brands/brands.json

Example brands.json content:
[
  "logo1.png",
  "logo2.jpg",
  "company-xyz.svg"
]

After adding files and updating the JSON, open the assets viewer at:

  http://localhost:3000/assets/

(If running a Vite dev server, it serves the `public` folder automatically.)
