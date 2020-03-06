---
title: Approximating Gromov-Hausdorff Distance
people: ["Carola Wenk, Tulane University", "Jeffrey Vitter, University of Mississippi"]
publications: ["majhi2019approximating"]
---
The Gromov-Hausdorff distance between two abstract
metric spaces was first introduced by M. Gromov in ICM 1979 (see Berger
<cite>berger_encounter_2000</cite>). The notion, although it emerged in the context of
Riemannian metrics, proves to be a natural distance measure between any two
(compact) metric spaces. Only in the last decade the Gromov-Hausdorff distance
has received much attention from the researchers in the more applied
fields. In shape recognition and comparison, shapes are regarded
as metric spaces that are deformable under a class of transformations. Depending
on the application in question, a suitable class of transformations is chosen,
then the dissimilarity between the shapes are defined by a suitable notion of
<em>distance measure or error</em> that is invariant under the desired class of
transformations. For comparing Euclidean shapes under Euclidean isometry, the
use of Gromov-Hausdorff distance is proposed and discussed in
<cite>memoli_theoretical_2005,memoli_use_nodate,memoli_gromov-hausdorff_2008,
  memoli_properties_2012</cite>.

In this paper, we are primarily motivated by the questions pertaining to the
computation of the Gromov-Hausdorff distance, particularly between Euclidean
subsets.  Although the distance measure puts the Euclidean shape matching on a
robust theoretical foundation <cite>memoli_theoretical_2005,memoli_use_nodate</cite>,
the question of computing the Gromov-Hausdorff distance, or even an
approximation thereof, still remains elusive. In the recent years, some efforts
have been made to address such computational aspects. Most notably, the authors
of <cite>agarwal_computing_2015</cite> show an NP-hardness result for approximating
the Gromov-Hausdorff distance between metric trees. For Euclidean subsets,
however, the question of a polynomial time algorithm is still open. In
<cite>memoli_properties_2012</cite>, the author shows that computing the distance is
related to various NP-hard problems and studies a variant of Gromov-Hausdorff
distance.

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