<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GamesResource\Pages;
use App\Filament\Resources\GamesResource\RelationManagers;
use App\Models\Games;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GamesResource extends Resource
{
    protected static ?string $model = Games::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Nombre'),
                TextInput::make('classification')
                    ->label('Clasificacion'),
                TextInput::make('genre')
                    ->label('Genero'),
                TextInput::make('price')
                    ->label('Precio')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nombre'),
                TextColumn::make('classification')
                    ->label('Clasificación'),
                TextColumn::make('genre')
                    ->label('Genero'),
                TextColumn::make('price')
                    ->label('Precio')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGames::route('/'),
            'create' => Pages\CreateGames::route('/create'),
            'edit' => Pages\EditGames::route('/{record}/edit'),
        ];
    }
}
