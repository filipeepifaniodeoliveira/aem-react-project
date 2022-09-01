export * from './aemTheme';

export const configGenerator = (theme) => ({
    name: theme.name,
    fontFamilyTernary: '',
    colorPrimary: theme.c_primary_500,
    common: {
        fontFamilyPrimary: theme.f_body_family,
        fontFamilySecundary: theme.f_title_family,
        fontSizeNano: theme.f_body_nano,
        fontSizeSmall: theme.f_body_sm,
        fontSizeExtMeg: theme.f_body_lg_ext_meg,
        fontTitlePrimary: theme.f_heading_2,
        fontTitleLarge: theme.f_heading_3,
        fontSizeSubtitle: theme.f_subtitle_1,
        fontWeight100: 100,
        fontWeight200: 200, 
        fontWeight300: 300, 
        fontWeight400: 400, 
        fontWeight500: 500, 
        fontWeight600: 600, 
        fontWeight700: 700, 
        fontWeight800: 800, 
        fontWeightFor: 'bold', 
    },
    colors: {
        textComum: theme.c_text_comoom,
        textAlternative: theme.c_text_alternative,
        textAlternativePlace: theme.c_text_place,
    }

});
