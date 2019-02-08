export const races = [
    {
        name: 'Human',
        modifiers: {

        }
    },
    {
        name: 'Elf',
        modifiers: {
            'intelligence': 2,
            'constitution': -2
        }
    },
    {
        name: 'Dwarf',
        modifiers: {
            'strength': 2,
            'charisma': -2
        }
    },
    {
        name: 'Gnome',
        modifiers: {
            
        }
    },
    {
        name: 'Xeph',
        modifiers: {
            
        }
    },
    {
        name: 'Dromite',
        modifiers: {
            
        }
    },
]

export const subraces = {
    'Human': [
        {
            name: 'Calishite',
        },
        {
            name: 'Cormyrian',
        },
        {
            name: 'Tashalaran',
        },
        {
            name: 'Ormathian',
        },
    ],
    'Elf': [
        {
            name: "Asiel'velthey",
            modifiers: {
                'strength': 2,
                'dexterity': -2
            }
        },
        {
            name: "Quo'lendri",
            modifiers: {
                'strength': 2,
                'dexterity': -2
            }
        },
        {
            name: "Tao'ilarien",
            modifiers: {
                'strength': 2,
                'dexterity': -2
            }
        },
        {
            name: 'Drow',
            modifiers: {
                'intelligence': 2,
                'dexterity': -2
            }
        },
    ],
    'Dromite': [
        {
            name: 'Earth',
        },
        {
            name: 'Fire',
        },
        {
            name: 'Air',
        },
        {
            name: 'Water',
        },
    ],
}