# IM1: Simple Point Mass

## Inputs
- $\rho$ : Air density
- $S$ : Cross-sectional area of the object
- $C_D$ : Drag coefficient at the current Mach number
- $\mathbf{v}$ : Current elocity vector
- $v$ : Magnitude of the velocity vector
- $m$ : Mass of the object
- $\mathbf{g}$ : Gravitational acceleration vector

## Equation
$$
\frac{d\mathbf{v}}{dt} = \frac{- \frac{1}{2} \rho S C_D \mathbf{v}v}{m} - \mathbf{g}
$$

## Description
The differential equation describes the change in velocity at each time step ($\Delta t$) of a point mass object experiencing only drag force and gravitational acceleration.

## Notes

## Uses
[TM1: Velocity ODE](../theoretical-models/TM1.md)
[TM2: Drag Force](../theoretical-models/TM2.md)
[DD1: Sum of Forces](../data-definitions/DD1.md)

## Referenced by