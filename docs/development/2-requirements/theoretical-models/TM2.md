# TM2: Drag Force

## Equation
$$
\mathbf{F_D} = - \frac{1}{2} \rho S C_D \mathbf{v}v
$$

## Description
The drag force, proportional to the square of the velocity, acts in the opposite direction of the velocity vector.

- $\rho$ is the air density.
- $S$ is the cross-sectional area of the object.
- $C_D$ is the drag coefficient.
- $\mathbf{v}$ is the velocity vector.
- $v$ is the magnitude of the velocity vector. 

## Notes
The drag coefficient ($C_D$) is usually provided as a curve with respect to the Mach number ($M$). The curve need to be interpolated at each time step to get the current drag coefficient.
## Sources
Carlucci 2007[@Carlucci2007]

## Uses

## Referenced by
[DD1: Sum of Forces](../data-definitions/DD1.md)