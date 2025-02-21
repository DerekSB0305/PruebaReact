<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movies>
 */
class MoviesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake() -> sentence(3),
            'description' => fake() -> sentence(8),
            'classification' => fake() -> randomLetter(),
            'price' => fake() -> numberBetween(60, 160)
        ];
    }
}
