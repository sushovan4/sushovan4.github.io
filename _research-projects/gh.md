---
title: Approximating Gromov-Hausdorff Distance
people: ["Carola Wenk, Tulane University", "Jeffrey Vitter, University of Mississippi"]
publications: ["majhi2019approximating"]
---
The Gromov-Hausdorff distance has been shown in
<cite>memoli_theoretical_2005,memoli_use_nodate</cite> to provide a reasonable
framework for comparing shapes. This metric was first introduced by M. Gromov in
the context of Riemannian manifolds; see Gromov's book
<cite>gromov_metric_2007</cite>. However, it can also be defined between two abstract
metric spaces $(X,d_X)$ and $(Y,d_Y)$ to measure how much they are
<em>metrically-close</em>. Motivated by its potential use in topological data
analysis, we address the problem of computing the Gromov-Hausdorff distance
between two (finite) metric spaces.

Given two (compact) metric spaces $(X,d_X)$ and $(Y,d_Y)$, their Gromov-Hausdorff
distance is formally defined (<cite>gromov_metric_2007</cite>) by

$$d_{GH}(X,Y)=\inf_{\substack{f:X\to Z\\g:Y\to Z\\(Z,d_Z)}}d^Z_H(f(X),g(Y)),$$

where the Hausdorff distance $d^Z_H$ of $Z$ is minimized over all isometries
$f,g$ and metric spaces $(Z,d_Z)$.

Sometimes, an alternative definition, which is computationally more viable, is
considered using the concept of <em>correspondences</em>. Given two point sets
$X$ and $Y$, a correspondence $C$ between them is a subset of $X\times Y$ such
that $\forall x\in X\exists y\in Y\ni(x,y)\in C$ and $\forall y\in Y\exists x\in
X\ni(x,y)\in C$. Roughly speaking, a correspondence is a relation that is
``bi-surjective''. Any surjective function $f:X\to Y$ naturally induces a
correspondence

$$C_f=\left\{\big(x,f(x)\big)\mid x\in X\right\}.$$

For a given correspondence $C$, its distortion is defined to be

$$dist(C)=\sup_{\substack{(x_1,y_1),(x_2,y_2)\in
C}}|d_X(x_1,x_2)-d_Y(y_1,y_2)|.$$

Now, the Gromov-Hausdorff distance is
characterized by

$$d_{GH}(X,Y)=\frac{1}{2}\inf_{C\subseteq X\times Y}dist(C);$$

see <cite>burago_course_2001</cite> for a proof. We consider the problem of
efficiently computing the Gromov-Hausdorff distance between finite subsets $X$
and $Y$ of $\mathbb{R}^d$ equipped with the standard Euclidean metric.

We note from the latter definition of the Gromov-Hausdorff distance that it
takes at least $2^k$ operations to naively compute it if $X,Y$ have at most $k$
points. In such a case in general, we seek an <em>approximation algorithm</em>
that requires only polynomial many operations, but at the expense of computing
an approximate answer that is within a certain <em>approximation factor</em>.

The authors of <cite>agarwal_computing_2015</cite> show the NP-hardness of
approximation of $d_{GH}$ when $X,Y$ are metric trees. However, computing the
Gromov-Hausdorff distance between Euclidean subsets is still elusive.

In <cite>hutchison_approximating_2005</cite>, the authors consider (finite) subsets
$X,Y$ of $\mathbb{R}^d$ of same cardinality and the class of only bijective
correspondences between them. For $d=1$, they present an approximation algorithm
to find the least distortion bijection with an approximation factor of $2$. They
then pose two open problems: Can an approximation factor better than $2$ be
achieved and is it NP-hard to compute the least distortion bijective
correspondence between Euclidean subsets?

In our effort to approximate $d_{GH}$, we look into its relationship with
$d_{H,iso}$, the minimum Hausdorff distance under the class of Euclidean
isometries. For $d=1$ and compact subsets $X,Y$, we show in
<cite>majhi2019approximating</cite> that

$$d_{GH}(X,Y)\leq d_{H,iso}(X,Y)\leq\left(1+\frac{1}{4}\right)d_{GH}(X,Y).$$

We also show that the upper bound is tight. This gives rise to an
$O(k\log{k})$-time algorithm for approximating $d_{GH}(X,Y)$ with an
approximation factor of $\left(1+\frac{1}{4}\right)$; see
<cite>majhi2019approximating</cite>. Our method can also be adapted to have the same
approximation factor for finding the lowest distortion bijective
correspondences, hence solving the open problem addressed in
<cite>hutchison_approximating_2005</cite>.

We now investigate the following two directions:

1) For $d=1$, we conjecture that it is NP-hard to approximate the Gromov-Hausdorff
  distance with a factor better than $\left(1+\frac{1}{4}\right)$.

2) Unlike $d=1$, the $d_{H,iso}$ fails to provide an approximation algorithm
  with a constant approximation factor when $d>1$. In higher dimension, are
  there any other ways to approximate the Gromov-Hausdorff distance?
