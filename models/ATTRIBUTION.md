# 3D body model

`body3d.bin` and `body3d.json` are adapted from **BodyParts3D 4.0**, © The Database Center for Life Science (DBCLS), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) ([licence](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html)), as packaged by [Human Atlas](https://github.com/ashemag/human-atlas) (MIT).

Changes: a subset of organs, skin and skeleton was selected and simplified, positions were quantised to 16-bit, and colours were chosen for this app. BodyParts3D includes the internal vessel and airway trees of the liver and lungs but not their outer surfaces, so the liver and lung shapes here are smoothed shells drawn around those trees and are approximate.

The model is an adult male reference body. It is for orientation only, not diagnosis.

# Flat body pictures (`img/body-*.webp`)

- The men's pictures (`body-m-*`) are flat renders of the 3D model above (BodyParts3D 4.0, CC BY 4.0), with plain shorts drawn on.
- The women's pictures (`body-f-*`) are renders of the default adult female body from [MakeHuman](https://github.com/makehumancommunity/makehuman) (assets released under CC0), with the arms posed down and a plain top and shorts drawn on.

The tap areas for each part of the body were traced from these pictures.
