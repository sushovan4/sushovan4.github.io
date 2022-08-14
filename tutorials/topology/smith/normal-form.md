### Smith Normal Form
Given an $A\in\mathcal{M}_{n,m}(\mathbb Z)$, we seek invertible matrices $P\in GL_{m}(\mathbb Z)$ and $Q\in GL_{n}(\mathbb Z)$ such that
$D=Q^{-1}AP,$
where $D$ is an $n\times m$ diagonal integer matrix:
$$
\newcommand\bigzero{\makebox(0,0){\text{\huge0}}}
\begin{pmatrix}
\begin{array}{c:c}
  \begin{matrix}
    d_1 & 0 & \ldots & 0 \\
    0 & d_2 & \ldots & 0\\
    0 & \ldots & \ldots & 0 \\
    0 & \ldots & 0 & d_k \\
  \end{matrix}
  & {\huge0}_{k,m-k} \\
  \hdashline \\
  {\huge0}_{n-k,k} & {\huge0}_{n-k,m-k}
\end{array}
\end{pmatrix}
$$
with $d_i\geq0$ for all $i=1, 2, \ldots, k$ and $d_1| d_2| \ldots | d_k$.

**Note:**
- the diagonal matrix $D$ always exists, as we allow it to be a zero matrix; it is also *unique*. 
- $P,Q$ may not, however, be unique [artin].
- if $A$ is viewed as the matrix of a linear transformation $T:G_1\to G_2$ between two [finitely-generated free abelian groups](https://observablehq.com/@sushovan4/basechange), then $P$ and $Q$ are the *basechange matrices* for $G_1$ and $G_2$, respectively.

### Application
Unlike the other popular canonical forms—e.g., the Jordan normal form for matrices over an *algebraically-closed* field—the Smith normal form is particularly relevant in the context of $\mathbb Z$-modules, more generally $R$-modules [artin]. In the field of combinatorial topology, the reduction to Smith normal form facilitates the computation of the [homology groups](https://en.wikipedia.org/wiki/Homology_(mathematics)) of finte [simplicial complexes](https://en.wikipedia.org/wiki/Simplicial_complex) [Munkres84]. 
