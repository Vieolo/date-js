import type { SupportedLanguage } from './types';


export class I18N {
    static i18nMonths: {
        short: { [d in SupportedLanguage]: string[] },
        long: { [d in SupportedLanguage]: string[] },
    } = {
            "short": {
                "EN": ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                "NL": ["Jan", "Febr", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dec"],
                "PL": ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
                "DE": ["Jan", "Feb", "März", "Apr", "Mai", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dez"],
                "ES": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
                "FR": ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
                "RU": ["янв", "февр", "март", "апр", "май", "июнь", "июль", "авг", "сент", "окт", "нояб", "дек"],
                "PT": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            },
            "long": {
                "EN": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                "NL": ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                "PL": ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                "DE": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                "ES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                "FR": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
                "RU": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
                "PT": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            },
        }


    static i18nDays: {
        initial: { [d in SupportedLanguage]: string[] },
        short: { [d in SupportedLanguage]: string[] },
        long: { [d in SupportedLanguage]: string[] },
    } = {
        "initial": {
            "EN": ["S", "M", "T", "W", "T", "F", "S"],
            "NL": ["Z", "M", "D", "W", "D", "V", "Z"],
            "PL": ["N", "P", "W", "Ś", "C", "P", "S"],
            "DE": ["S", "M", "D", "M", "D", "F", "S"],
            "ES": ["D", "M", "T", "W", "T", "V", "S"],
            "FR": ["D", "L", "M", "M", "J", "V", "S"],
            "RU": ["В", "П", "В", "С", "Ч", "П", "С"],
            "PT": ["D", "S", "T", "Q", "Q", "S", "S"]
        },
        "short": {
            "EN": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            "NL": ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            "PL": ["Ni", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            "DE": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "ES": ["Do", "Mo", "Tu", "We", "Th", "Vie", "Sa"],
            "FR": ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
            "RU": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            "PT": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
        },
        "long": {
            "EN": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "NL": ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
            "PL": ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            "DE": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "ES": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            "FR": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            "RU": ["Воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            "PT": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        },
    }

}