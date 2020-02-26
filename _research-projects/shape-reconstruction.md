---
title: Shape Reconstruction
permalink: research/map-construction
description: "Road-map reconstruction from GPS trajectory data is a challenging problem
in computational geometry. See <a href='//mapconstruction.org'>mapconstruction.org</a>" 
---
Application of algebraic topological methods in reconstruction of graph-like or
filamentary structures claims the lion's share of my current research. These
projects are primarily motivated by the problem of reconstructing road networks
from noisy GPS locations. Road-networks can be modeled as metric graphs embedded
in the two-dimensional Euclidean space. The challenges in developing
geometrically close and computationally efficient reconstruction algorithms are
ensued from the noise present in the data.

We realize that the available topological methods for shape reconstruction only
work for compact Euclidean subsets with positive reach or, at least, positive
weak feature size (see <cite>SMALE,CHAZALSTAB</cite>). However, our shapes of
interest fail to evince such properties. In <cite>fw17</cite>, we introduce the
notion of <b><i>geodesic feature size</i></b> and develop a persistence-based
algorithm for computing the $1$-Betti number of the underlying of planar metric
graph.

In order to further our understanding of this new feature size, we
extend our formulation to be able to reconstruct a larger class of Euclidean
shapes: geodesic spaces. In <cite>fasy2018reconstruction</cite>, we introduce two new
sampling parameters: convexity radius and distortion of embedding into the
Euclidean ambient. When the point-cloud is sampled around a small Hausdorff
proximity of the underlying geodesic space, the Euclidean &#268;ech and
Vietoris-Rips complexes of the point-cloud both are used to correctly compute
the homotopy (and homology) groups of the underlying shape. When considered the
persistent topological features at small scales, we guarantee a correct
topological reconstruction. For a geometric reconstruction, in the special case
of metric graphs, we further compute a Vietoris-Rips complex of the sample with
respect to a different metric, which, unlike the Euclidean metric, embodies the
underlying geodesic metric of the shape. Then, the shadow (as defined in
<cite>Chambers2010</cite>) of this complex is shown to be homotopy equivalent to the
ground truth. Given the probability of correct reconstruction, we also estimate
the smallest sample size.

In order to demonstrate and visualize our theoretical development, I coded a
Java Script library, which is hosted on Github
<a href="https:://github.com/sushovan4/shape-reconstruction">repository link</a>). The
library runs on a Web-app
<a href="https://smajhi.com/shape-reconstruction">link</a>.
