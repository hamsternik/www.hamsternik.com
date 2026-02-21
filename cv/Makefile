

.SHELLFLAGS = -e -o pipefail -c

# > [!TIP]:
# Make variables are evaluated at parse time. When Make starts, it runs this line once.
# The value never changes during the Make target's session, even if you modify the VERSION
# file later in the target.
VERSION := $(shell cat VERSION)

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
mkfile_path := $(Abspath $(lastword $(MAKEFILE_LIST)))
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

help:
	@cat Makefile

.PHONY : version
version:
	@echo "resume version $(VERSION)"

clean:
	$(LATEXMK) -output-directory="build" $(LATEXMK_FLAGS_CLEAN)
	@if [[ -d "build" ]]; then rm -rf build; fi

bump-version: version
	@$(eval BUMPED_VERSION := $(shell echo $(VERSION) | awk -F . '{print $$1"."$$2"."$$3+1}'))
	@echo "bump version to $(BUMPED_VERSION)"
	@echo "$(BUMPED_VERSION)" > VERSION

## Build & Deploy

# Without having FORCE_MAKE as pattern, Make would check timestamps and skip `build-*` if it thinks nothing changed.
.PHONY : FORCE_MAKE

build-ios: TEX_FILE = main.tex
build-ios: FORCE_MAKE clean lacheck
	@echo "\n🦠 The root dir: $(ROOT_DIR)"
	$(LATEXMK) $(LATEXMK_FLAGS) $(TEX_FILE)
	@echo "\n🦠Coping output PDF to the /public dir."
	cp build/$(BUILD_OUTPUT_NAME).pdf $(ROOT_DIR)/../public/nkhomitsevych.resume.pdf

build-fullstack: TEX_FILE = main.product.tex
build-fullstack: FORCE_MAKE clean lacheck
	@echo "\n🦠 The root dir: $(ROOT_DIR)"
	$(LATEXMK) $(LATEXMK_FLAGS) $(TEX_FILE)

watch:
	@watch --color -n1 'test main.tex -nt build/$(BUILD_OUTPUT_NAME).pdf && make build'

.PHONY : deploy
deploy: bump-version
	@echo "\nRebuild the latest PDF file to change the title..."
	@$(MAKE) build
	@git add VERSION ../public/nkhomitsevych.resume.pdf
	@git commit -m "cv: bump to $(BUMPED_VERSION); then deploy"


## Package Rules

lacheck:
	@lacheck $(TEX_FILE)

## Install

# The DEPENDS.txt file is not a standard feature of TeX/LaTeX ecosystem but
# is instead a custom convention often used in collaborative or automated build systems
# to list dependencies required to compile the document successfully. 
# Before DEPENDS.txt the requirements.txt has been used. Check out potential
# issues with that approach: https://tex.stackexchange.com/q/528069.
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
