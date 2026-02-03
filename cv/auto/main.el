;; -*- lexical-binding: t; -*-

(TeX-add-style-hook
 "main"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "10pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("babel" "english") ("inputenc" "utf8") ("xcolor" "") ("amsmath" "") ("blindtext" "") ("enumitem" "") ("href-ul" "") ("geometry" "") ("sectsty" "")))
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "babel"
    "inputenc"
    "xcolor"
    "amsmath"
    "blindtext"
    "enumitem"
    "href-ul"
    "geometry"
    "sectsty")
   (TeX-add-symbols
    '("education" 3)
    '("Experience" 3)
    '("name" 1)
    "SectionSpacing"
    "SubSectionSpacing")
   (LaTeX-add-lengths
    "spacebox"))
 :latex)

