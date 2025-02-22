import type { LocaleDefinition } from '..';
import af_ZA from './af_ZA';
import ar from './ar';
import az from './az';
import cz from './cz';
import de from './de';
import de_AT from './de_AT';
import de_CH from './de_CH';
import el from './el';
import en from './en';
import en_AU from './en_AU';
import en_AU_ocker from './en_AU_ocker';
import en_BORK from './en_BORK';
import en_CA from './en_CA';
import en_GB from './en_GB';
import en_GH from './en_GH';
import en_IE from './en_IE';
import en_IND from './en_IND';
import en_NG from './en_NG';
import en_US from './en_US';
import en_ZA from './en_ZA';
import es from './es';
import es_MX from './es_MX';
import fa from './fa';
import fi from './fi';
import fr from './fr';
import fr_BE from './fr_BE';
import fr_CA from './fr_CA';
import fr_CH from './fr_CH';
import ge from './ge';
import he from './he';
import hr from './hr';
import hy from './hy';
import id_ID from './id_ID';
import it from './it';
import ja from './ja';
import ko from './ko';
import lv from './lv';
import mk from './mk';
import nb_NO from './nb_NO';
import ne from './ne';
import nl from './nl';
import nl_BE from './nl_BE';
import pl from './pl';
import pt_BR from './pt_BR';
import pt_PT from './pt_PT';
import ro from './ro';
import ru from './ru';
import sk from './sk';
import sv from './sv';
import tr from './tr';
import uk from './uk';
import ur from './ur';
import vi from './vi';
import zh_CN from './zh_CN';
import zh_TW from './zh_TW';
import zu_ZA from './zu_ZA';

export type KnownLocale =
  | 'af_ZA'
  | 'ar'
  | 'az'
  | 'cz'
  | 'de'
  | 'de_AT'
  | 'de_CH'
  | 'el'
  | 'en'
  | 'en_AU'
  | 'en_AU_ocker'
  | 'en_BORK'
  | 'en_CA'
  | 'en_GB'
  | 'en_GH'
  | 'en_IE'
  | 'en_IND'
  | 'en_NG'
  | 'en_US'
  | 'en_ZA'
  | 'es'
  | 'es_MX'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'fr_BE'
  | 'fr_CA'
  | 'fr_CH'
  | 'ge'
  | 'he'
  | 'hr'
  | 'hy'
  | 'id_ID'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lv'
  | 'mk'
  | 'nb_NO'
  | 'ne'
  | 'nl'
  | 'nl_BE'
  | 'pl'
  | 'pt_BR'
  | 'pt_PT'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'ur'
  | 'vi'
  | 'zh_CN'
  | 'zh_TW'
  | 'zu_ZA';

export type KnownLocales = Record<KnownLocale, LocaleDefinition>;

const locales: KnownLocales = {
  af_ZA,
  ar,
  az,
  cz,
  de,
  de_AT,
  de_CH,
  el,
  en,
  en_AU,
  en_AU_ocker,
  en_BORK,
  en_CA,
  en_GB,
  en_GH,
  en_IE,
  en_IND,
  en_NG,
  en_US,
  en_ZA,
  es,
  es_MX,
  fa,
  fi,
  fr,
  fr_BE,
  fr_CA,
  fr_CH,
  ge,
  he,
  hr,
  hy,
  id_ID,
  it,
  ja,
  ko,
  lv,
  mk,
  nb_NO,
  ne,
  nl,
  nl_BE,
  pl,
  pt_BR,
  pt_PT,
  ro,
  ru,
  sk,
  sv,
  tr,
  uk,
  ur,
  vi,
  zh_CN,
  zh_TW,
  zu_ZA,
};

export default locales;
