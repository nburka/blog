import { Node } from 'unist';
import visit from 'unist-util-visit';

interface ElementNode extends Node {
  tagName: string;
  properties: { [key: string]: string };
}

interface UrlNode extends ElementNode {
  tagName: 'a' | 'img';
}

export function transformRelativeUrls(appBase: string) {
  function visitor(node: UrlNode) {
    const propertyName = node.tagName === 'img' ? 'src' : 'href';

    if (!/^https?:\/\//.test(node.properties[propertyName])) {
      node.properties[propertyName] = `${appBase}/${node.properties[
        propertyName
      ].replace(/^\//, '')}`;
    }
  }

  function isUrlNode(node: unknown): node is UrlNode {
    return (
      typeof node === 'object' &&
      (node as Node).type === 'element' &&
      ['a', 'img'].includes((node as ElementNode).tagName)
    );
  }

  function transform(tree: Node) {
    visit(tree, isUrlNode, visitor);
  }

  return transform;
}
