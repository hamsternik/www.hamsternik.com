.SHELLFLAGS = -e -o pipefail -c

VERSION := 2025.10.6

BUILD_OUTPUT_NAME := nikita.khomitsevych.$(VERSION)
LATEXMK := latexmk # latexmk --help OR https://mirrors.up.pt/pub/CTAN/support/latexmk/latexmk.pdf
LATEXMK_FLAGS := -verbose -jobname="$(BUILD_OUTPUT_NAME)" -output-directory="build" -use-make -pdf # -f to force continued processing past errors 
LATEXMK_FLAGS_CLEAN := -C # to clean all without pdf output use `-c` instead

# TeX typesetting engine using Unicode and supporting modern font technologies such as Apple Advanced Typography.
# WIP FIXME: Migrate to xelatex as there no need to use extra flags eg. -pdf
XELATEX := xelatex 

# `wildcard` build-in function replaced by a space-separated list of names of existing files that match one of the given file name patterns
TEXS := $(wildcard *.tex)
PDFS := $(TEXS:.tex=.pdf)

## Project Rules
mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

help:
	@cat Makefile

watch:
	@watch --color -n1 'test main.tex -nt build/$(BUILD_OUTPUT_NAME).pdf && make build'

.PHONY : FORCE_MAKE
build: FORCE_MAKE clean
	@echo "🦠 The root dir: $(ROOT_DIR)"
	$(LATEXMK) $(LATEXMK_FLAGS) main.tex
	@echo "🦠Coping output PDF to the /public dir."
	cp build/$(BUILD_OUTPUT_NAME).pdf $(ROOT_DIR)/../public/nkhomitsevych.resume.pdf

# The DEPENDS.txt file is not a standard feature of TeX/LaTeX ecosystem but is instead a custom convention 
# often used in collaborative or automated build systems to list dependencies required to compile 
# the document successfully. 
# Before DEPENDS.txt the requirements.txt has been used. Check out potential issues with that approach: 
# https://tex.stackexchange.com/q/528069.
# The 'cv' package contains only hard dependencies to install.
install:
	@sudo tlmgr option repository ctan
	@sudo tlmgr --verify-repo=none update --self
	sudo tlmgr install $(shell cut -w -f 2 "$(shell pwd)/DEPENDS.txt" | uniq)	

# WIP FIXME: To install project dependencies rely on the install target.
# Use --usermode to run tlmgr without sudo. 
install2:
	@tlmgr --usermode option repository ctan
	tlmgr --usermode install $(shell cut -w -f 2 "$(shell pwd)/DEPENDS.txt" | uniq)	

clean:
	$(LATEXMK) $(LATEXMK_FLAGS) $(LATEXMK_FLAGS_CLEAN)
	@if [[ -d "build" ]]; then rm -rf build; fi

## Package Rules

lacheck:
	@lacheck *.tex

version:
	@echo "resume version $(VERSION)"

