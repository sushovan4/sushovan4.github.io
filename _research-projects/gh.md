---
title: Approximating Gromov-Hausdorff Distance
people: ["Carola Wenk, Tulane University", "Jeffrey Vitter, University of Mississippi"]
publications: ["majhi2019approximating"]
---

Along with reconstruction, I am also interested in comparison of shapes. The
Gromov-Hausdorff ($d_{GH}$) distance has been shown (in
<cite>memoli_theoretical_2005,memoli_use_nodate</cite>) to provide a reasonable
framework for comparing shapes. Although the authors of
<cite>agarwal_computing_2015</cite> show the NP-hardness of approximation of the
GH distance between metric trees, computing the distance between Euclidean
subsets is still elusive. To address such questions in the Euclidean space, I
started a collaborative project with <a class="styled"
href="https://cs.tulane.edu/~carola">Carola Wenk</a> and <a
href="https://www.cs.olemiss.edu/vitter">Jeffrey Vitter</a>. In our effort to
approximate the GH distance for subsets of $\mathbb{R}^d$, we look into its
relationship with $d_{H,iso}$, the minimum Hausdorff distance under the class of
Euclidean isometries. For $d=1$, we show that
$$d_{H,iso}\leq\left(1+\frac{1}{4}\right)d_{GH}.$$

We also show that the bound is tight. This gives rise to an $O(n\log{n})$-time
algorithm for approximating $d_{GH}$ with an approximation factor of
$\left(1+\frac{1}{4}\right)$; see <cite>majhi2019approximating</cite>. Like
metric trees, we believe that computing the GH is also NP-hard for Euclidean
subsets. The nature of the project is ongoing. Currently, we investigate such
hardness questions, along with questions of approximating $d_{GH}$ for $d>1$.

We also observe in <cite>memoli_theoretical_2005</cite> such an invariant.