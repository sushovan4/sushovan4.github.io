---
title: Shape Reconstruction
publications: ["fw17","fasy2018reconstruction"]
people: [ "Sushovan Majhi","Carola Wenk", "Brittany Fasy", "Rafal Komendarczyk"]
permalink: research/shape-construction
---
Application of algebraic topological methods in the reconstruction of geodesic
spaces claims the lion's share of my current research. The project is primarily
motivated by the problem of reconstructing road-networks or maps from noisy GPS
locations of drivers. Our goal is to find an efficient way to approximate a
(hidden) map--both topologically and geometrically--from GPS locations sampled
around it.

A road-network is often modeled as an <em>embedded metric graph</em>: a compact
subset of $\mathbb{R}^N$ that is homeomorphic to a one-dimensional simplicial
complex.  We observe that the standard Euclidean metric $\|\cdot\|$ induces an
intrinsic <em>geodesic metric</em> $d_L$ which, in this case, is the
shortest-path distance on the graph. Such an observation naturally
alluded to the geodesic subspaces on Euclidean space. We generalize the set-up
and consider the reconstruction problem of geodesic subspaces of
$\mathbb{R}^N$. We define a compact subset $X$ of $\mathbb{R}^N$ is to be a
geodesic space if $X$ is a length metric space under the geodesic metric
$d_L$. Our objective is to construct a topological space $\widetilde{X}$ from a
(dense, but noisy) sample $S$ that is homotopy equivalent to the (unknown)
geodesic space $X$. If such a strong reconstruction result is difficult to
apprehend, we would like to at least compute the Betti numbers of $X$ from $S$.


In order to construct a topological space from a discrete set of sample points,
the use of Vietoris-Rips and &#268;ech complexes is becoming increasingly popular
in TDA; see <cite>DeSilva:2004,ATTALI2013448,Adams_2019</cite> for example. We
investigate these complexes on the sample at different scales for a successful
topological and geometric reconstruction.

The challenges in developing a geometrically close and computationally efficient
reconstruction algorithm are ensued from the noise present in the data. We
realize that the available topological methods for shape reconstruction only
work for manifolds (<cite>SMALE</cite>) and a very special class of other
compact Euclidean subsets: spaces with positive weak feature size
(<cite>CHAZALSTAB</cite>).  Because of the presence of corners and branching,
these methods do not apply to our shapes of interest. We also observe in Figure
<a href="#rips">1</a> that the Vietoris-Rips (or &#268;ech) complex on a dense sample
around such a shape may not faithfully reflect its topology.

In <cite>fw17</cite>, we consider the special case of metric graphs and
introduce the notion of <em>geodesic feature size</em> in order to develop an
algorithm for computing the $1$-Betti number of the underlying of planar graph.

<img id="rips" class="ui medium centered image" src="/assets/graph-rips.jpg"/>
<p style="font-size: 1.2em;padding:20px">The 1-Betti of the underlying geodesic
space (blue) is $8$. However, the Vietoris-Rips complex (red) on a dense sample
(black) is shown to have its 1-Betti $9$. The picture is generated on
<a href="https://smajhi.com/shape-reconstruction"
   class="styled"><tt>smajhi.com/shape-reconstruction</tt></a>.
</p>

In order to further our understanding of the new feature size for a general
geodesic space, we introduce two new sampling parameters: <em>convexity
radius</em> and <em>distortion of embedding</em> for a geodesic space. In
<cite>fasy2018reconstruction</cite>, we show when the point-cloud is sampled around a
small Hausdorff proximity of the underlying geodesic space, both the Euclidean
&#268;ech and Vietoris-Rips complexes of the point-cloud can be used to correctly
compute the homotopy (and homology) groups of the underlying shape. When
considered the persistent topological features at small scales, we guarantee a
correct topological reconstruction.

For a geometric reconstruction, in the special case of planar metric graphs, we
further compute a Vietoris-Rips complex of the sample with respect to a
different metric, which--unlike the Euclidean metric--embodies the underlying
geodesic metric $d_L$ of the shape. Then, the shadow (as defined in
<cite>Chambers2010</cite>) of this complex is shown to be homotopy equivalent to the
ground truth.

As a coding hobbyist, I develop tools, libraries, and software to supplement my
research. In order to demonstrate and visualize our theoretical development, I
coded a JavaScript library, which is hosted on
<a class="styled"
href="https://github.com/sushovan4/shape-reconstruction"><tt>Github</tt></a>. The
library runs on a web-app:<a class="styled" href="https://smajhi.com/shape-reconstruction"><tt>
smajhi.com/shape-reconstruction</tt></a>.

The success of our methodologies in <cite>fasy2018reconstruction</cite> emboldens our
future objectives for a stronger reconstruction. So far, we successfully
reconstruct the topology of general geodesic spaces. We also reconstruct the
geometry of a planar embedded graph.

1) Our method does not currently extend to non-planar graph because of our
  lack of knowledge about the second homotopy group of the shadow. We conjecture
  that all its higher homotopy groups are trivial.

2) Currently, the output of such a geometric reconstruction is a thick region
  around the hidden graph. We are considering a post-processing step to prune
  the output shadow $\widetilde{G}$ in order to output an embedded graph that is
  isomorphic to the hidden graph $G$.

3) We also consider the geometric reconstruction of higher-dimensional
  simplicial complexes. Unlike the graphs, such a space may have non-trivial
  homotopy groups. We have seen that the output of computes the fundamental
  group correctly. However, it is not clear whether the higher homotopy groups
  of the output are also isomorphic to the respective homotopy groups of the
  underlying space.
