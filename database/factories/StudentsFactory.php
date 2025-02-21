<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Students>
 */
class StudentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake() -> sentence(2),
            'lastname' => fake() -> sentence(2),
            'grade' => fake() -> randomLetter(),
            'group' => fake() -> numberBetween(1, 10)
        ];
    }
}
