import type { Faker } from '.';

const commonFileTypes = ['video', 'audio', 'image', 'text', 'application'];

const commonMimeTypes = [
  'application/pdf',
  'audio/mpeg',
  'audio/wav',
  'image/png',
  'image/jpeg',
  'image/gif',
  'video/mp4',
  'video/mpeg',
  'text/html',
];

function setToArray<T>(set: Set<T>): T[] {
  // shortcut if Array.from is available
  if (Array.from) {
    return Array.from(set);
  }

  const array: T[] = [];
  set.forEach((item) => {
    array.push(item);
  });
  return array;
}

/**
 * Generates fake data for many computer systems properties.
 */
export class System {
  constructor(private readonly faker: Faker) {
    // Bind `this` so namespaced is working correctly
    for (const name of Object.getOwnPropertyNames(System.prototype)) {
      if (name === 'constructor' || typeof this[name] !== 'function') {
        continue;
      }
      this[name] = this[name].bind(this);
    }
  }

  /**
   * Returns a random file name with extension.
   *
   * @example
   * faker.system.fileName() // 'self_enabling_accountability_toys.kpt'
   */
  fileName() {
    let str = this.faker.random.words();
    str =
      str.toLowerCase().replace(/\W/g, '_') + '.' + this.faker.system.fileExt();
    return str;
  }

  /**
   * Returns a random file name with a given extension or a commonly used extension.
   *
   * @param ext Extension

   * @example
   * faker.system.commonFileName() // 'dollar.jpg'
   * faker.system.commonFileName('txt') // 'global_borders_wyoming.txt'
   */
  commonFileName(ext): string {
    let str = this.faker.random.words();
    str = str.toLowerCase().replace(/\W/g, '_');
    str += '.' + (ext || this.faker.system.commonFileExt());
    return str;
  }

  /**
   * Returns a mime-type.
   *
   * @example
   * faker.system.mimeType() // 'video/vnd.vivo'
   */
  mimeType() {
    const typeSet = new Set<string>();
    const extensionSet = new Set();
    const mimeTypes = this.faker.definitions.system.mimeTypes;

    Object.keys(mimeTypes).forEach((m) => {
      const type = m.split('/')[0];

      typeSet.add(type);

      if (mimeTypes[m].extensions instanceof Array) {
        mimeTypes[m].extensions.forEach((ext) => {
          extensionSet.add(ext);
        });
      }
    });

    const types = setToArray(typeSet);
    const extensions = setToArray(extensionSet);
    const mimeTypeKeys = Object.keys(this.faker.definitions.system.mimeTypes);

    return this.faker.random.arrayElement(mimeTypeKeys);
  }

  /**
   * Returns a commonly used file type.
   *
   * @example
   * faker.system.commonFileType() // 'audio'
   */
  commonFileType() {
    return this.faker.random.arrayElement(commonFileTypes);
  }

  /**
   * Returns a commonly used file extension.
   *
   * @example
   * faker.system.commonFileExt() // 'gif'
   */
  commonFileExt() {
    return this.faker.system.fileExt(
      this.faker.random.arrayElement(commonMimeTypes)
    );
  }

  /**
   * Returns a file type.
   *
   * @example
   * faker.system.fileType() // 'message'
   */
  fileType() {
    const typeSet = new Set<string>();
    const extensionSet = new Set();
    const mimeTypes = this.faker.definitions.system.mimeTypes;

    Object.keys(mimeTypes).forEach((m) => {
      const type = m.split('/')[0];

      typeSet.add(type);

      if (mimeTypes[m].extensions instanceof Array) {
        mimeTypes[m].extensions.forEach((ext) => {
          extensionSet.add(ext);
        });
      }
    });

    const types = setToArray(typeSet);
    const extensions = setToArray(extensionSet);
    const mimeTypeKeys = Object.keys(this.faker.definitions.system.mimeTypes);
    return this.faker.random.arrayElement(types);
  }

  /**
   * Returns a file extension.
   *
   * @param mimeType Valid [mime-type](https://github.com/jshttp/mime-db/blob/master/db.json)
   *
   * @example
   * faker.system.fileExt() // 'emf'
   * faker.system.fileExt('application/json') // 'json'
   */
  fileExt(mimeType?: string): string {
    const typeSet = new Set<string>();
    const extensionSet = new Set<string>();
    const mimeTypes = this.faker.definitions.system.mimeTypes;

    Object.keys(mimeTypes).forEach((m) => {
      const type = m.split('/')[0];

      typeSet.add(type);

      if (mimeTypes[m].extensions instanceof Array) {
        mimeTypes[m].extensions.forEach((ext) => {
          extensionSet.add(ext);
        });
      }
    });

    const types = setToArray(typeSet);
    const extensions = setToArray(extensionSet);
    const mimeTypeKeys = Object.keys(this.faker.definitions.system.mimeTypes);

    if (mimeType) {
      const mimes = this.faker.definitions.system.mimeTypes;
      return this.faker.random.arrayElement(mimes[mimeType].extensions);
    }

    return this.faker.random.arrayElement(extensions);
  }

  /**
   * Returns a directory path.
   *
   * @example
   * faker.system.directoryPath() // '/etc/mail'
   */
  directoryPath(): string {
    const paths = this.faker.definitions.system.directoryPaths;
    return this.faker.random.arrayElement(paths);
  }

  /**
   * Returns a file path.
   *
   * @example
   * faker.system.filePath() // '/usr/local/src/money.rmp.dotx'
   */
  filePath() {
    return this.faker.fake(
      '{{system.directoryPath}}/{{system.fileName}}.{{system.fileExt}}'
    );
  }

  /**
   * Returns a [semantic version](https://semver.org).
   *
   * @example
   * faker.system.semver() // '1.1.2'
   */
  semver(): string {
    return [
      this.faker.datatype.number(9),
      this.faker.datatype.number(9),
      this.faker.datatype.number(9),
    ].join('.');
  }
}
